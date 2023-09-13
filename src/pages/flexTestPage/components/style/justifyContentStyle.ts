import {CSSProperties} from "react";

export namespace styles {
    export const container: CSSProperties = {
        display: 'flex',
        height: '100%',
        marginTop: 8,
        flexDirection: 'column',
        backgroundColor: "aliceblue",
    };
    export const box: CSSProperties = {
        width: 50,
        height: 50,
    };
    export const row: CSSProperties = {
        display: 'flex',
        flexDirection: "row",
        flexWrap: "wrap",
    };
    export const button: CSSProperties = {
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 4,
        backgroundColor: "oldlace",
        width: '40%',
        marginLeft: '2%',
        alignSelf: "flex-start",
        marginBottom: 6,
        textAlign: "center",
    };
    export const selected: CSSProperties = {
        backgroundColor: "coral",
        borderWidth: 0,
    };
    export const buttonLabel: CSSProperties = {
        fontSize: 12,
        fontWeight: "500",
        color: "coral",
    };
    export const selectedLabel: CSSProperties = {
        color: "white",
    };
    export const label: CSSProperties = {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
    }
}
