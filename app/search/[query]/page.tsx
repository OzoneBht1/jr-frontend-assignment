"use client";

import SearchedAlbumCard from "@/components/search/SearchedAlbumCard";
import { getSearchedResults } from "@/queryFns/getSearchedResults";
import { useAppSelector } from "@/store/hooks";
import { ISearchResults } from "@/types/interface/searchResults";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

let LIMIT_PER_PAGE = 10;
export default function SearchedResults({
  params,
}: {
  params: { query: string };
}) {
  const { access_token } = useAppSelector((state) => state.spotify);
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useQuery<ISearchResults>(
    ["search", currentPage],
    () =>
      getSearchedResults(
        access_token as string,
        params.query,
        LIMIT_PER_PAGE.toString(),
        ((currentPage - 1) * LIMIT_PER_PAGE).toString()
      ),
    {
      retry: false,
      enabled: Boolean(params.query) && Boolean(access_token),
    }
  );
  if (!data) {
    return <div>no data</div>;
  }
  const totalPages = Math.ceil(data?.albums?.total / LIMIT_PER_PAGE);
  console.log(data?.albums?.total);

  const handlePageLeft = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageRight = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="flex w-full justify-center items-center pt-5">
      <div className="flex flex-col justify-center items-start w-3/5 gap-6">
        <h6 className="font-semibold text-3xl">
          {data?.albums?.total} Results Found
        </h6>
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          {data?.albums?.items?.map((item) => {
            return <SearchedAlbumCard item={item} />;
          })}
          <div className="flex items-center gap-2">
            <AiOutlineLeftCircle
              onClick={handlePageLeft}
              className="h-10 w-10"
            />
            <p>
              Page {currentPage} of {totalPages}
            </p>
            <AiOutlineRightCircle
              onClick={handlePageRight}
              className="h-10 w-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
