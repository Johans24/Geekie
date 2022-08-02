import useImgSrc from "../../sharedHooks/useImgSrc";

const MediaCard = ({ mediaInfo = {} }) => {
  const {
    poster_path,
    title,
    name,
    original_name,
    original_title,
    media_type,
  } = mediaInfo;
  const { imgSrc, onImgError } = useImgSrc();

  const titleToUse = title || name || original_title || original_name;

  const dateKeyToUse = Object.keys(mediaInfo).find((key) => key.includes("date"));

  const [year] = (dateKeyToUse && mediaInfo[dateKeyToUse]?.split("-")) || "";

  const mediaType = (media_type === "tv" && "TV Series") || media_type;
  return (
    <div className="border-none relative shadow-lg rounded-lg bg-white w-52">
      <div className="poster-container h-4/5">
        <img
          className="h-full w-full object-fill"
          onError={ onImgError }
          src={imgSrc(poster_path)}
          alt={titleToUse}
        />
      </div>
      <div className="title-container p-2">
        <p className="truncate font-bold">{titleToUse}</p>
        <p>
          {year && <span>{year} - </span>} <span className="capitalize">{mediaType}</span>
        </p>
      </div>
    </div>
  );
};

export default MediaCard;
