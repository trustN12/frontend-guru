import { motion } from "framer-motion";
import {
  User,
  FileText,
  Book,
  CheckCircle,
  Clock,
  ShoppingCart,
  Code,
  Code2,
} from "lucide-react";

const DashboardSidebar = ({ activeTab, setActiveTab, user }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full md:w-64 shrink-0"
    >
      <div className="glass-card rounded-xl p-5 sticky top-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
            <img
              src={user.imageUrl}
              alt="User  Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="font-medium text-sm">{user?.fullName || "User "}</h3>
            <p className="text-xs text-muted-foreground">
              {user?.primaryEmailAddress?.emailAddress || ""}
            </p>
          </div>
        </div>

        <nav>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  activeTab === "dashboard"
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-primary/5"
                }`}
              >
                <FileText size={16} />
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("my-courses")}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  activeTab === "my-courses"
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-primary/5"
                }`}
              >
                <Book size={16} />
                <span>My Courses</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("progress")}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  activeTab === "progress"
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-primary/5"
                }`}
              >
                <CheckCircle size={16} />
                <span>Progress</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("schedule")}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  activeTab === "schedule"
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-primary/5"
                }`}
              >
                <Clock size={16} />
                <span>Schedule</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("buy-courses")}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                  activeTab === "buy-courses"
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-primary/5"
                }`}
              >
                <ShoppingCart size={16} />
                <span>Buy Courses</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default DashboardSidebar;
