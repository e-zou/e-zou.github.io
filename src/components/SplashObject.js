import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

function SplashObject(props) {
    // reference will let us access the mesh to work with
    const mesh = useRef()
    // sets up states for hover and active for future works
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const clock = new THREE.Clock()

    // this is like the animate loop
    useFrame(() => {
        // can be used to rotate object later
        mesh.current.rotation.set(0,0,0)
        // clock from THREE js to get time
        const time = clock.getElapsedTime()
        // changes properties of the vertices on the mesh
        mesh.current.geometry.vertices.map(v => {
            const waveX1 = 0.5 * Math.sin(v.x * 2 + time)
            const waveX2 = 0.25 * Math.sin(v.x * 1 + time)
            const waveY1 = 0.1 * Math.sin(v.y * 5 + time * 0.5)
            const waveY2 = 0.75 * Math.sin(v.y * 2 + time * 0.5)
            v.z = waveX1 + waveX2 + waveY1 + waveY2
        })
        mesh.current.geometry.verticesNeedUpdate = true
    })
    return (
    // Meshes must have a geometry and material
    <mesh
        {...props}
        ref={mesh}
        // Testing properties
        // scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        // onClick={(e) => setActive(!active)}
        // onPointerOver={(e) => setHover(true)}
        // onPointerOut={(e) => setHover(false)}>
        // width, height, width segments, height segments
    >
        {/* planeGeometry: width, height, width segments, height segments */}
        <planeGeometry  args={[15, 15, 20, 20]} />
        {/* <meshBasicMaterial color={hovered ? 'hotpink' : 'orange'} side={'DoubleSide'} wireframe={true}/> */}
        <meshBasicMaterial color={'black'} side={'DoubleSide'} wireframe={true}/>

    </mesh>
    )
}

export default SplashObject

/* CREDITS & SOURCES */
// 3D waving flag tutorial: https://www.youtube.com/watch?v=Su1n2Uuf38E&t=722s
// Three.js fiber tutorial: https://www.youtube.com/watch?v=fdtqqyeKRJk&t=265s
// Three js documentation: https://threejs.org/docs/index.html#api/en/core/Clock
// Three js fiber: https://inspiring-wiles-b4ffe0.netlify.app/5-recipes-switching-renderers

