import { createContext, useState, ReactNode, useMemo, useEffect } from "react";

interface Location {
    latitude: number;
    longitude: number
}

interface locationContextType {
    userLocation: Location | null;
    location: string,
    getUserLocation: () => void;
}

export const locationContext = createContext<locationContextType | null>({
    userLocation: null,
    location: "",
    getUserLocation: () => { },
});

const LocationContextProvider = ({ children }: { children: ReactNode }) => {

    const apiKey = "0f7f9e7133d342b7be6dcb1f291854d5";
    const [userLocation, setUserLocation] = useState<Location | null>(null);
    const [location, setLocation] = useState<string>("");


    const getLocationInfo = (latitude: number, longitude: number): void => {
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${apiKey}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                if (data.status.code === 200) {
                    console.log("results:", data.results);
                    // setLocation(data.results[0].formatted);
                    setLocation(data.results[0].components.state_district);

                } else {
                    console.log("Reverse geolocation request failed.");
                }
            })
            .catch((error) => console.error(error));
    }
    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                    getLocationInfo(latitude, longitude);
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        }
        // if geolocation is not supported by the users browser
        else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    useEffect(() => {
        getUserLocation();
    }, [])

    console.log(userLocation, location);

    const obj = useMemo(() => ({ userLocation, getUserLocation, location }), []); // value is cached by useMemo

    return <locationContext.Provider value={obj} >{children}</locationContext.Provider>
}

export default LocationContextProvider;

