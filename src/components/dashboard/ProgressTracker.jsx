import SectionHeading from "../main/SectionHeading";
import { CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ProgressTracker = ({ user, enrolledCourses, setActiveTab }) => {
  // Filter courses for the current user
  const userCourses = enrolledCourses.filter(
    (course) => course.userId === user?.id
  );

  // Calculate overall progress based on watched videos
  const overallProgress =
    userCourses.length > 0
      ? Math.round(
          userCourses.reduce((sum, course) => sum + course.progress, 0) /
            userCourses.length
        )
      : 0;

  return (
    <div className="space-y-6">
      <SectionHeading>My Progress</SectionHeading>

      {userCourses.length > 0 ? (
        <div className="glass-card rounded-xl p-6">
          <h3 className="text-lg font-medium mb-6">Course Progress</h3>
          <div className="space-y-6">
            {userCourses.map((course) => (
              <div key={course.id} className="space-y-2">
                <div className="flex justify-between">
                  <h4 className="font-medium">{course.title}</h4>
                  <span className="text-sm text-muted-foreground">
                    {course.progress}%
                  </span>
                </div>
                <Progress value={course.progress} className="h-2" />
                <div className="text-sm text-muted-foreground flex justify-between">
                  <span>
                    {course.completedLessons} of {course.totalLessons} lessons
                    completed
                  </span>
                  <span>
                    Est. time remaining:{" "}
                    {(course.totalLessons - course.completedLessons) * 2} hours
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Overall Progress</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <h4 className="font-medium">Total Completion</h4>
                <span className="text-sm text-muted-foreground">
                  {overallProgress}%
                </span>
              </div>
              <Progress value={overallProgress} className="h-2" />
            </div>
          </div>
        </div>
      ) : (
        <div className="glass-card rounded-xl p-6">
          <div className="text-center py-12">
            <CheckCircle
              size={48}
              className="mx-auto text-muted-foreground mb-4"
            />
            <h3 className="text-lg font-medium mb-2">No Progress Yet</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Once you enroll in courses and complete lessons, your progress
              will be tracked here.
            </p>
            <button
              onClick={() => setActiveTab("buy-courses")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressTracker;
