"use strict";
var React;
(function (React) {
    class Component {
        constructor() { }
        componentDidMount() {
            console.log('Component did mouont...');
        }
        componentWillUnmount() {
            console.log('component will unmount...');
        }
        componentWillRecieveProps() {
            console.log('component will receive props...');
        }
    }
    React.Component = Component;
    class PureComponent {
    }
    React.PureComponent = PureComponent;
    function useState(initialState) {
        let arr = initialState;
        let setState = () => {
            console.log(arr);
        };
        setState();
    }
    React.useState = useState;
})(React || (React = {}));
//# sourceMappingURL=React.js.map