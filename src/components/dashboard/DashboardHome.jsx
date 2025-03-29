import ElevenLabsConversationalChat from "../AI-AGENT/AIChat";
import SectionHeading from "../main/SectionHeading";

const DashboardHome = ({ user, enrolledCourses }) => {
  // Filter courses for the current user
  const userCourses = enrolledCourses.filter(
    (course) => course.userId === user?.id
  );

  return (
    <div className="space-y-6">
      <ElevenLabsConversationalChat />
      <SectionHeading>Welcome, {user?.firstName || "User"}</SectionHeading>

      <div className="glass-card rounded-xl p-6">
        <h3 className="text-lg font-medium mb-4">Getting Started</h3>
        <p className="text-muted-foreground mb-6">
          Welcome to your Frontend Guru Academy dashboard. Here you can track
          your progress, access your enrolled courses, and manage your learning
          journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-secondary/50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Course Recommendations</h4>
            <p className="text-sm text-muted-foreground">
              Based on your profile, we recommend starting with our React
              Fundamentals course.
            </p>
          </div>
          <div className="bg-secondary/50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Schedule a Call</h4>
            <p className="text-sm text-muted-foreground">
              Book a 1:1 session with Nabarun to discuss your learning goals and
              get personalized guidance.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-card rounded-xl p-6">
          <h3 className="font-medium mb-1">Enrolled Courses</h3>
          <p className="text-3xl font-bold">{userCourses.length}</p>
        </div>
        <div className="glass-card rounded-xl p-6">
          <h3 className="font-medium mb-1">Completed Lessons</h3>
          <p className="text-3xl font-bold">
            {userCourses.reduce(
              (total, course) => total + course.completedLessons,
              0
            )}
          </p>
        </div>
        <div className="glass-card rounded-xl p-6">
          <h3 className="font-medium mb-1">Total Hours</h3>
          <p className="text-3xl font-bold">
            {userCourses.reduce(
              (total, course) => total + course.completedLessons,
              0
            ) * 2}
          </p>
        </div>
      </div>

      <div className="glass-card rounded-xl p-6">
        <h3 className="text-lg font-medium mb-4">Recent Announcements</h3>
        <div className="space-y-4">
          <div className="border-b border-border pb-4">
            <p className="font-medium">New React Course Coming Soon</p>
            <p className="text-sm text-muted-foreground">
              A new advanced React patterns course will be available soon.
            </p>
            <p className="text-xs text-muted-foreground mt-1">March, 2025</p>
          </div>
          <div>
            <p className="font-medium">Welcome to the Academy!</p>
            <p className="text-sm text-muted-foreground">
              Thank you for joining Frontend Guru Academy. Browse available
              courses to get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
