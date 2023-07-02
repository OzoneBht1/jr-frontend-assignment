"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { getSearchedResults } from "@/queryFns/getSearchedResults";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAppSelector } from "@/store/hooks";
import { ISearchResults } from "@/types/interface/searchResults";
import { useRouter } from "next/navigation";
import { AiOutlineSearch, AiOutlineCheck } from "react-icons/ai";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const { access_token } = useAppSelector((state) => state.spotify);
  const inputRef = useRef<any>(null);

  const { data, isLoading, refetch, remove } = useQuery<ISearchResults>(
    ["search-preview"],
    () => getSearchedResults(access_token as string, query, "6"),
    {
      retry: false,
      enabled: Boolean(query),
    }
  );
  const router = useRouter();
  console.log(data);
  useEffect(() => {
    if (query) {
      const timeout = setTimeout(() => refetch(), 500);
      return () => clearTimeout(timeout);
    }
  }, [query]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${query}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex items-center justify-center gap-5">
        <Combobox value={query}>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-sm bg-white text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                ref={inputRef}
                className="w-full border border-gray-300 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {data?.albums?.items?.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  data?.albums.items?.map((album, idx) => (
                    <Combobox.Option
                      key={idx}
                      onClick={() => {
                        router.push(`/album/${album.id}`);
                        inputRef.current.blur();
                        setQuery("");
                      }}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-teal-600 text-white" : "text-gray-900"
                        }`
                      }
                      value={album}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {album.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            ></span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
        <button
          className="position right-8 absolute border-gray-300"
          type="submit"
        >
          <AiOutlineSearch className="h-7 w-7 text-slate-500 " />
        </button>
      </div>
    </form>
  );
}
