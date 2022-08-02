import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMedia } from "../../api/api-options";
import { setLoadingMedia, setMedia } from "../../store/media/actions/actions";

export const useSearchMedia = ({ title, type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const searchMedia = async () => {
    dispatch(setLoadingMedia(true));
    const { Search: mediaResults } =  await getMedia({ s: title, type });

    dispatch(setMedia(mediaResults));
    dispatch(setLoadingMedia(false));
    navigate(`/results/${title}`);
  };

  return {
    searchMedia
  };
};
