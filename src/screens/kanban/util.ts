import { useMemo } from "react"
import { useLocation } from "react-router"
import { useProjects } from "utils/project"
import { useUrlQueryParam } from "utils/url"

export const useProjectIdInUrl = () => {
    const { pathname } = useLocation()
    const id = pathname.match(/projects\/(\d+)/)?.[1]
    return Number(id)
}
export const useProjectInUrl = () => useProjects(useProjectIdInUrl())
export const useKanbanSearchParams = () => ({ projectId: useProjectIdInUrl() })
export const useKanbanQueryKey = () => ['kanbans', useKanbanSearchParams()]
export const useTasksSearchParams = () => {
    const [param, setParam] = useUrlQueryParam([
        'name',
        'typeId',
        'processorId',
        'tagId'
    ]);
    const projectId = useProjectIdInUrl();
    return useMemo(() => ({
        projectId,
        typeId: Number(param.typeId) || undefined,
        processorId: Number(param.processorId) || undefined,
        tagId: Number(param.tagId) || undefined,
        name: param.name
    }), [projectId, param]);
}

export const useTasksQueryKey = () => ['tasks', useTasksSearchParams()]