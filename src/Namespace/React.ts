
namespace React {
    export class Component {
        constructor(){}
        public componentDidMount() {
            console.log('Component did mouont...');
        }
        public componentWillUnmount() {
            console.log('component will unmount...');
        }
        public componentWillRecieveProps(){
            console.log('component will receive props...');
        }
    }
    export class PureComponent {

    }
    export function useState<T>(initialState:T){
        let arr:T = initialState;
        let setState= ()=> {
            console.log(arr);

        }
        setState();
    }
}
