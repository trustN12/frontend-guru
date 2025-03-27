// MyCourses.jsx
import SectionHeading from "../main/SectionHeading";
import { Book } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const MyCourses = ({
  user,
  enrolledCourses,
  updateCourseProgress,
  setActiveTab,
}) => {
  const userCourses = enrolledCourses.filter(
    (course) => course.userId === user?.id
  );

  return (
    <div className="space-y-6">
      <SectionHeading>My Courses</SectionHeading>

      {userCourses.length > 0 ? (
        <div className="space-y-6">
          {userCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <Book size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className="text-lg font-medium">{course.title}</h3>
                      <div className="text-sm text-muted-foreground">
                        Enrolled:{" "}
                        {new Date(course.enrolledDate).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="mt-2 mb-4">
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Progress: {course.progress}%</span>
                        <span>
                          {course.completedLessons} of {course.totalLessons}{" "}
                          lessons
                        </span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {course.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="inline-block text-xs font-medium bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full border border-amber-100"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between bg-muted/20 px-6 py-3">
                <span className="text-sm text-muted-foreground">
                  Duration: {course.duration}
                </span>
                <button
                  onClick={() => updateCourseProgress(course.id, 10)}
                  className="px-3 py-1 text-xs bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Mark Progress
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-xl p-6">
          <div className="text-center py-12">
            <Book size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No Courses Yet</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              You haven't enrolled in any courses yet. Browse our catalog to
              find courses that match your learning goals.
            </p>
            <button
              onClick={() => setActiveTab("buy-courses")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Browse Courses
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCourses;