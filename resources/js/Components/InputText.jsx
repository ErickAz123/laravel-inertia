import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export default forwardRef(function InputText(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={'w-full px-2 py-2 border-0 border-b-2 border-gray-400 focus:outline-none focus:border-b-2 focus:border-blue-500 focus:ring-0 ' +
                className
            }
            ref={localRef}
        />
    );
})
