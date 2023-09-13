import { CSSProperties } from "react";

export namespace styles {
    export const container: CSSProperties = {
        marginTop: 50,
        flexDirection: 'column',
        display: 'flex'
    };

    export const bigBlue: CSSProperties = {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    };

    export const red: CSSProperties = {
        color: 'red',
    };
}
