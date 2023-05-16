import { HiCheck, HiX } from "react-icons/hi";

const Card = (props) => {
  return (
    <div className="flex flex-col m-5 border-2 border-white rounded-lg p-5 w-64 text-white shadow-lg shadow-slate-100/20 hover:shadow-slate-100/30">
      <div className="text-2xl border-b-2 border-b-teal-100/50 font-bold uppercase pb-3 text-teal-300 flex flex-row justify-center">
        {props.cardName}
      </div>
      <div className="text-md pt-3">{props.description}</div>

      <button
        className="flex flex-row border-teal-300 border-2 p-3 justify-center items-center mx-5 rounded-md my-8 hover:bg-teal-300/20
      "
      >
        Download
      </button>

      <div className="text-sm flex flex-row items-center border-t-2 border-t-teal-100/50 pt-3">
        <HiCheck className="w-5 h-5 mr-1 text-green-500" />
        Kaspad
      </div>
      <div className="text-sm flex flex-row items-center">
        {["lite", "full"].includes(props.cardName.toLowerCase()) ? (
          <HiCheck className="w-5 h-5 mr-1 text-green-500" />
        ) : (
          <HiX className="text-red-400 w-5 h-5 mr-1" />
        )}
        REST-API Server
      </div>
      <div className="text-sm flex flex-row items-center">
        {["full"].includes(props.cardName.toLowerCase()) ? (
          <HiCheck className="w-5 h-5 mr-1 text-green-500" />
        ) : (
          <HiX className="text-red-400 w-5 h-5 mr-1" />
        )}
        Kaspa-DB Filler
      </div>
      <div className="text-sm flex flex-row items-center">
        {["full"].includes(props.cardName.toLowerCase()) ? (
          <HiCheck className="w-5 h-5 mr-1 text-green-500" />
        ) : (
          <HiX className="text-red-400 w-5 h-5 mr-1" />
        )}
        Kaspa-DB PostgreSQL
      </div>
    </div>
  );
};

export default Card;
