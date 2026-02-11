import Array "mo:core/Array";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Type
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // User Profile Management Functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Contact Form Types and Data
  public type ContactFormSubmission = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    createdAt : Time.Time;
  };

  var submissions : [ContactFormSubmission] = [];

  // Public contact form submission - accessible to everyone including guests
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, subject : Text, message : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or subject.isEmpty() or message.isEmpty()) {
      Runtime.trap("All fields are required!");
    };

    let submission : ContactFormSubmission = {
      name;
      email;
      subject;
      message;
      createdAt = Time.now();
    };

    submissions := Array.tabulate<ContactFormSubmission>(submissions.size() + 1, func(i) { if (i < submissions.size()) { submissions[i] } else { submission } });
  };

  // Admin-only function to view all submissions
  public query ({ caller }) func getAllSubmissions() : async [ContactFormSubmission] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all submissions");
    };
    submissions;
  };
};
