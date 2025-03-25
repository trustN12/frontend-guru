import SectionHeading from "../main/SectionHeading";
import { Clock } from "lucide-react";

const Schedule = () => {
  return (
    <div className="space-y-6">
      <SectionHeading>My Schedule</SectionHeading>

      <div className="glass-card rounded-xl p-6">
        <div className="text-center py-12">
          <Clock size={48} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">No Scheduled Sessions</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            You don't have any scheduled sessions. Contact Nabarun to set up
            personalized training sessions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            Contact Nabarun
          </a>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
