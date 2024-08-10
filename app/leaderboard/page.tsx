export default function Leaderboard() {
    
    interface Player {
        [key: string]: number;
    }

    const leaderboard: Player[] = [
        { 'jeffrey': 300 },
        { 'jonathan': 254 },
        { 'john': 250 },
        { 'jim': 239 },
        { 'joseph': 212 },
        { 'jade': 199 },
        { 'jordan': 194 },
        { 'jacob': 12 },
        { 'julian': 1 }
    ]

    const columns = [ 'Rank', 'Name', 'Points' ];

    return (
        <div className="w-full h-screen bg-[rgb(224,229,182)] flex justify-center overflow-visible">
            <table className="border-collapse border-2 border-black table-fixed w-1/2">
                <caption>LEADERBOARD</caption>
                <thead>
                    <tr>
                        {
                            columns.map((name: string, i: number) => 
                                <th scope="col" className="w-fit p-1.5 border border-black text-center" key={i} style={{minWidth: 100 / columns.length}}>{name}</th> 
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        leaderboard.map((player: Player, i: number) => {
                            const playerInfo: string[] = Object.keys(player);
                            return (
                                <tr key={i}>
                                    <td className="p-2 border border-black text-center">{i + 1}</td>
                                    <td className="p-2 border border-black text-center">{playerInfo[0]}</td>
                                    <td className="p-2 border border-black text-center">{player[playerInfo[0]]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}