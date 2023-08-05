import TechList from "./page/TechList";
import Orbit from "./three/Orbit";
import { useState } from 'react';

const pHash: Map<number, {x: number, y: number, z: number}> = new Map([
    [0, {x: -10, y: 0, z: -12}],
    [1, {x: 0.75, y: 0, z: 1.5}],
]);
//[0, {x: 6, y: 2.5, z: -8}]


function Tech() {
    const [zoom, setZoom] = useState(pHash.get(0));
    const [isOrbiting, setOrbiting] = useState(true);

    const handleHover = (arg: number) => {
        setZoom(pHash.get(arg));
    }

    const setOrbit = (arg: boolean) => {
        setOrbiting(arg);
    }

    return (
        <>
            <Orbit o_center={pHash.get(0) || {x: -10, y: 0, z: -12}} zoomPos={zoom  || {x: -10, y: 0, z: -12}} isOrbiting={isOrbiting} />
            <TechList passUp={handleHover} orbitState={setOrbit} />
        </>
    );
}

export default Tech