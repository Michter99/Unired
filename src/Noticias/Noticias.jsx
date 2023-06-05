import React from "react";
import { Timeline } from "react-twitter-widgets";
import "./Noticias.css";

const Noticias = () => {
    return (
        <div className="noticias-container pb-5">
            <h1 className="mb-5">Noticias</h1>
            <div className="timeline-container">
                <Timeline
                    dataSource={{
                        sourceType: "profile",
                        screenName: "unired_2023",
                    }}
                    options={{
                        username: "unired_2023",
                        height: "800",
                    }}
                />
            </div>

        </div>
    );
};

export default Noticias;
