import React, { ProfilerProps } from "react"

type Props = { metadata?: any, phases?: ('mount' | 'update')[] } & Omit<ProfilerProps, 'onRender'>

let queue: unknown[] = [];
const sendProfileQueue = () => {
    if (!queue.length) {
        return;
    }
    const queueToSend = [...queue];
    queue = [];
    console.log(queueToSend);
}
setInterval(sendProfileQueue, 5000);
export const Profiler = ({ metadata, phases, ...props }: Props) => {
    const reportProfile: PropfilerOnRenderCallback = (
        id: string,
        phase: 'mount' | 'update',
        actualDuration: number,
        baseDuration: number,
        startTime: number,
        commitTime: number,
        interactions: Set<Interaction>
    ) => {
        if (!phases || phases.includes(phase)) {
            queue.push(id,
                phase,
                actualDuration,
                baseDuration,
                startTime,
                commitTime,
                interactions,
                metadata);
        }
    };
    return <React.Profiler onRender={reportProfile} {...props} />
}