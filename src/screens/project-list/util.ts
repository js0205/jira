import { useMemo } from "react";
import { useUrlQueryParam } from "utils/url";

//项目列表搜索的参数
export const useProjectsSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);
  return [
    useMemo(
      () => ({ ...param, personId: Number(param.personId) || undefined }),
      [param]
    ),
    setParam,
  ] as const;
};

export const useProjectModal = () => {
  const [{ projectCreate }, setProjecCreate] = useUrlQueryParam([
    "projectCreate",
  ]);
  const open = () => setProjecCreate({ projectCreate: true });
  const close = () => setProjecCreate({ projectCreate: undefined });
  return {
    projectModalOpen: projectCreate === "true",
    open,
    close,
  };
};
