import React from "react";

export default function Header() {
    return (
        <header className="bg-[url('/src/assets/worldmap.png')] w-full bg-cover bg-center p-4">
            <section className="logo-wrapper grid gap-2 justify-center grid-cols-[1fr_3fr]">
                <img src="/src/assets/parrot.png" title="PolyGlott Logo" className="w-24" />
                <section className="title-wrapper text-start">
                    <h1 className="text-white">PollyGlott</h1>
                    <h3 className="text-white">Perfect Translation Every Time</h3>
                </section>
            </section>
        </header>
    )
}