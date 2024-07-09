import { useNavigate } from "react-router-dom";
export const Landing = () => {
    const navigate = useNavigate();
    return <div className="flex justify-center">
        <div className="pt-8 max-w-screen-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex justify-center rounded-xl">
                    <img src={"/image1_0.jpg "} alt="Chessboard" className="max-w-115 " />
                </div>
                <div className="pt-16">
                    <div className="flex justify-center">

                        <h1 className="text-4xl font-bold text-white">Welcome to Chess The Game of Mind's </h1>
                    </div>
                    <div className=" mt-4 inline-block text-blue-900 hover:text-green-900 bg-transparent hover:bg-transparent border border-blue-900 hover:border-green-900 py-2 px-4 rounded-lg transition-colors duration-300 justify-items-center">
 

                        <button onClick={() => {
                            navigate("/game")
                        }} >Play Online</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

}