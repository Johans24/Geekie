import React from "react";
import ReactPlaceholder from "react-placeholder";
import { RectShape } from "react-placeholder/lib/placeholders";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getMedia } from "../../api/api-options";
import MediaCard from "../general/MediaCard";
import Pagination from "./Pagination";

const MediaListPlaceholder = () => {
  const amountOfCardPlaceholders = 20;

  return (
    <div className="grid grid-cols-5 gap-x-2 gap-y-8">
      {[...Array(amountOfCardPlaceholders)].map((_, index) => (
        <RectShape
          color="#CDCDCD"
          key={index}
          style={{ width: 250, height: 350 }}
        />
      ))}
    </div>
  );
};

const MediaList = () => {
  const { searchQuery, page = 1 } = useParams();
  const navigate = useNavigate();
  const { isLoading, data } = useQuery(
    ["mediaResult", searchQuery],
    async () => {
      const { results, total_pages: totalPages } = await getMedia({
        query: searchQuery,
        page,
      });

      return { results, totalPages };
    },
    {
      enabled: !!searchQuery,
    }
  );

  const changePage = (newPage) => {
    navigate(`/results/${searchQuery}/${newPage}`);
  };

  return (
    <ReactPlaceholder
      ready={!isLoading}
      customPlaceholder={<MediaListPlaceholder />}
    >
      <div className="grid grid-cols-5 gap-x-2 gap-y-8">
        {data?.results?.map((mediaItem, index) => (
          <MediaCard key={index} mediaInfo={mediaItem} />
        ))}
      </div>
      <Pagination pagesAmount={data?.totalPages} changeHandler={changePage} />
    </ReactPlaceholder>
  );
};

export default MediaList;
