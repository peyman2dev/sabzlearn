import { Close } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import SessionsList from "./SessionsList";
import SessionCreate from "./SessionCreate";
import { useMutation } from "@tanstack/react-query";
import api from "../../../../../../Utils/Api/api";

const getAllSessions = async () => {
  return await api
    .get(`courses/sessions/`)
    .then((r) => r.data)
    .then((d) => d);
};

const SessionsCard = ({ visible, makeVisible, target }) => {
  const [sessions, setSessions] = useState([]);
  const [activeTab, setActiveTab] = useState("WATCH"); // CREATE || WATCH
  const { mutateAsync: getSessions, isPending } = useMutation({
    mutationKey: ["sessions"],
    mutationFn: getAllSessions,
  });

  useEffect(() => {
    if (target && !isPending) {
      getSessions(null, {
        onSuccess: (d) => {
          // d = Incoming data !
          if (d && d.length && !isPending) {
            let filterResult = d.filter(
              (session) => session.course?._id == target
            );
            console.log(filterResult)
            setSessions(filterResult);
          }
        },
      });
    }
  }, [target]);

  const tabs = [
    {
      id: crypto.randomUUID(),
      title: "مدیریت",
      key: "WATCH",
    },
    {
      id: crypto.randomUUID(),
      title: "ایجاد جلسه",
      key: "CREATE",
    },
  ];

  return (
    <section
      onClick={makeVisible}
      className={`w-full h-full ${
        visible ? "" : "opacity-0 invisible"
      } flex items-center select-none justify-center h-screen bg-black/50 fixed top-0 right-0 duration-150`}
    >
      <article
        onClick={(e) => e.stopPropagation()}
        className="w-2/4 h-[700px] rounded-lg overflow-hidden dark:bg-dark-700 bg-white shadow-lg"
      >
        <header className="w-full py-4 dark:bg-dark-600  text-sm border-b dark:border-white/5 flex items-center px-6 justify-between">
          <span>{activeTab == "WATCH" ? "مدیریت جلسات" : "ایجاد جلسه"}</span>
          <button onClick={makeVisible}>
            <Close />
          </button>
        </header>
        <div className="mt-4 flex items-center dark:border-white/10 text-sm border-b px-6">
          {tabs.map((tab) => (
            <button
              onClick={() => setActiveTab(tab.key)}
              key={tab.id}
              className={`px-3 duration-150 ${
                tab.key == activeTab
                  ? "rounded-t-xl dark:border-white/20 before:bg-white border-x border-t relative before:absolute before:w-full before:top-full before:dark:bg-dark-700 dark:bg-dark-900 before:h-px before:right-0"
                  : "text-sky-500 hover:underline"
              } pt-3 py-2`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <main className="p-6 h-full">
          {activeTab == "WATCH" ? (
            <SessionsList switchTabTo={() => setActiveTab("CREATE")} sessions={sessions} />
          ) : (
            <SessionCreate courseID={target} switchTabTo={() => setActiveTab("WATCH")}/>
          )}
        </main>
      </article>
    </section>
  );
};

export default SessionsCard;
