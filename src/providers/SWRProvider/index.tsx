import { PropsWithChildren, useMemo } from "react";
import { SWRConfig } from 'swr'
import { fetcher } from "./swr.fetcher";

export function SWRProvider(props: PropsWithChildren) {
  const { children } = props;

  const value = useMemo(() => ({
    fetcher
  }), [])

  return (
    <SWRConfig {...{ value }}>
      {children}
    </SWRConfig>
  )
}