// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React, {
  useRef,
  useEffect,
  Children,
  FunctionComponent,
  ReactNode,
} from 'react';

type PropsType = {
  children?: ReactNode;
};

export const ContactPills: FunctionComponent<PropsType> = ({ children }) => {
  const elRef = useRef<null | HTMLDivElement>(null);

  const childCount = Children.count(children);
  const previousChildCountRef = useRef<number>(childCount);
  const previousChildCount = previousChildCountRef.current;
  previousChildCountRef.current = childCount;

  useEffect(() => {
    const hasAddedNewChild = childCount > previousChildCount;
    const el = elRef.current;
    if (!hasAddedNewChild || !el) {
      return;
    }
    el.scrollTop = el.scrollHeight;
  }, [childCount, previousChildCount]);

  return (
    <div className="module-ContactPills" ref={elRef}>
      {children}
    </div>
  );
};
