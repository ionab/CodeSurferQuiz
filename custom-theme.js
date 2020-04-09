export default {
    colors: {
      background: "#214e82",
      text: "#ddd",
      primary: "#de9e14"
    },
    styles: {
      CodeSurfer: {
        pre: {
          color: "text",
          backgroundColor: "background",
          fontSize: "28px"
        },
        code: {
          color: "text",
          backgroundColor: "background"
        },
        tokens: {
          "comment cdata doctype": {
            fontStyle: "italic"
          },
          "builtin string": {
            color: "primary",
            fontStyle: "italic"
          },
          "line-number": {
            opacity: 0.8
          }
        },
        title: {
          backgroundColor: "background",
          color: "text"
        },
        subtitle: {
          color: "#d6deeb",
          backgroundColor: "rgba(10,10,10,0.9)"
        },
        unfocused: {
          // only the opacity of unfocused code can be changed
          opacity: 0.3
        }
      }
    }
  };