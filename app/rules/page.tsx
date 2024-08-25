export default function Instructions() {
    return (
        <div className="flex flex-col items-center gap-8 p-24 bg-[rgb(204,213,174)] text-slate-700 w-full">
            <h1 className="font-bold text-8xl m-2 pointer-events-none select-none text-black">The rules are simple!</h1>
            <br/>
            <section className="max-w-7xl text-wrap text-center">
                <p className="text-4xl font-bold">
                    After pressing the <span>Play</span> button you will be able to play as either a Guesser or a
                    Provider.
                </p>
                <br/>
                <div className="text-2xl">
                    <p className="bg-green-300 font-semibold rounded-2xl p-10 text-red-800">
                        If you select Guesser a picture will be shown and will have to give it a name!
                        Other players will later decide if the name you have come up with is good or not...
                        <br/>
                        But until then you will be able to vote for other player namings that will appear after you submit yours!
                    </p>
                    <p className="bg-gray-300 font-semibold mt-12 rounded-2xl p-10 text-blue-800">
                        If you select Provider you have to upload a picture that players will be
                        able to vote for after they have submitted a naming.
                    </p>
                </div>
            </section>
        </div>
    );
}
