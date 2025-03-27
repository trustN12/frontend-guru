// Schedule.jsx
import { useState } from "react";
import SectionHeading from "../main/SectionHeading";
import { Clock, Play, Lock } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Schedule = ({ user, enrolledCourses, availableCourses, setActiveTab, markVideoAsWatched }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handlePlayVideo = (video, courseId) => {
    markVideoAsWatched(courseId, video.id);
    setActiveVideo(video);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  const getCourseVideos = (courseId) => {
    const course = availableCourses.find((c) => c.id === courseId);
    return course?.videos || [];
  };

  return (
    <div className="space-y-6">
      <SectionHeading>My Learning Schedule</SectionHeading>

      {enrolledCourses.length > 0 ? (
        <div className="space-y-6">
          {activeVideo && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg w-full max-w-4xl">
                <div className="p-4 border-b flex justify-between items-center">
                  <h3 className="text-lg font-medium">{activeVideo.title}</h3>
                  <button
                    onClick={closeVideo}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Close
                  </button>
                </div>
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src={activeVideo.url} // Use the embed URL
                    title={activeVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}

          {enrolledCourses
            .filter((course) => course.userId === user?.id)
            .map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">
                    {course.title} - Course Videos
                  </h3>
                  <div className="space-y-3">
                    {getCourseVideos(course.id).map((video) => (
                      <div
                        key={video.id}
                        className="flex justify-between items-center p-3 rounded-md hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                            <Play size={14} />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">
                              {video.title}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {video.duration}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handlePlayVideo(video, course.id)} // Pass courseId
                          className="px-3 py-1 text-xs bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                        >
                          Watch
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/20 px-6 py-3">
                  <span className="text-sm text-muted-foreground">
                    Content available: lifetime access
                  </span>
                </CardFooter>
              </Card>
            ))}
        </div>
      ) : (
        <div className="glass-card rounded-xl p-6">
          <div className="text-center py-12">
            <Clock size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No Courses Enrolled</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              You haven't enrolled in any courses yet. Purchase a course to
              unlock video content.
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

      {/* Show available courses with locked videos */}
      {availableCourses.filter(
        (course) =>
          !enrolledCourses.some(
            (ec) => ec.id === course.id && ec.userId === user?.id
          )
      ).length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Available Course Videos</h3>
          <div className="space-y-6">
            {availableCourses
              .filter(
                (course) =>
                  !enrolledCourses.some(
                    (ec) => ec.id === course.id && ec.userId === user?.id
                  )
              )
              .map((course) => (
                <Card key={course.id} className="overflow-hidden bg-muted/30">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4 flex items-center">
                      <Lock size={16} className="mr-2 text-muted-foreground" />
                      {course.title} - Locked Content
                    </h3>
                    <div className="space-y-3">
                      {course.videos.map((video) => (
                        <div
                          key={video.id}
                          className="flex justify-between items-center p-3 rounded-md bg-muted/50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-muted/70 text-muted-foreground flex items-center justify-center">
                              <Lock size={14} />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground">
                                {video.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {video.duration}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => setActiveTab("buy-courses")}
                            className="px-3 py-1 text-xs bg-muted-foreground/20 text-muted-foreground rounded-md hover:bg-muted-foreground/30 transition-colors"
                          >
                            Unlock
                          </button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/20 px-6 py-3">
                    <button
                      onClick={() => setActiveTab("buy-courses")}
                      className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Enroll to Unlock (₹{course.discountedPrice / 100})
                    </button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;