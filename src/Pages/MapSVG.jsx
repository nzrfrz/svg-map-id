import * as React from "react";

import loadjs from "loadjs";

// import mapData from "../assets/data/mapdata.js";
// import mapUS from "../assets/data/usmap";

export const MapSVG = () => {
    const mapContainerRef = React.useRef();
    // console.log(window);

    React.useEffect(() => {
        // window.simplemaps_usmap.load();
        // Load SimpleMaps scripts
        // loadjs("/src/assets/data/mapdata.js", "simplemaps-data", {
        //     before: () => {
        //         console.log("Loading SimpleMaps data script...");
        //     },
        //     success: () => {
        //         console.log("SimpleMaps data script loaded successfully!");
        //         loadjs("/src/assets/data/usmap.js", "simplemaps-usmap", {
        //             before: () => {
        //                 console.log("Loading SimpleMaps map script...");
        //             },
        //             success: () => {
        //                 console.log("SimpleMaps map script loaded successfully!");
        //                 // Initialize the map after both scripts are loaded
        //                 if (mapContainerRef.current) {
        //                     window.simplemaps_usmap.load();
        //                 }
        //             },
        //             error: (path) => {
        //                 console.error(`Failed to load ${path}!`);
        //             },
        //             onerror: (err) => {
        //                 console.error("LoadJS error:", err);
        //             },
        //         });
        //     },
        //     error: () => {
        //         console.error("Failed to load SimpleMaps data script!");
        //     },
        // });

    }, []);

    return (
        <>
            <div id="map" />
        </>
    );
};