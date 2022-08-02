import React from "react";
import { useDispatch } from "react-redux";
import { getApiConfig } from "../api/api-options";
import { setApiConfig } from "../store/api-config/actions";

const useSetApiConfig = () => {
  const dispatch = useDispatch();
  const loadApiConfig = async () => {
    const config = await getApiConfig();

    dispatch(setApiConfig(config));
  }

  return {
    loadApiConfig
  }
}

export default useSetApiConfig;