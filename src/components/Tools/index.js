import Hr from "../Hr/index"
import SubTitle from "../SubTitle/index"
import ToolsItem from "../ToolsItem/index"
import styles from "@/styles/Tools/Tools.module.css"

export default function Tools() {
    return (
        <div className={styles.tools}>

            <div className={styles.contentInfo}>
                <SubTitle subtitle="Ferramentas" />
                <Hr />
            </div>
            <ul>
                <ToolsItem src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" />
                <ToolsItem src="https://getbootstrap.com.br/docs/4.1/assets/img/bootstrap-stack.png" />
                <ToolsItem src="https://www.trinitytechnology.in/logo/asp.png" />
                <ToolsItem src="https://cdn-icons-png.flaticon.com/512/4492/4492311.png" />
                <ToolsItem src="https://play-lh.googleusercontent.com/uGqP7F-E_eaEwTb3hMz63MWf0YKRSK6n9INBwibBSOrGDg6B3sd-ACuqNrR312ohdQ" />
                <ToolsItem src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64e7590f7d60f47d57cc2b7d_html5.png" />
                <ToolsItem src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64e7590f50f5c7e29ba373cc_css3.png" />
                <ToolsItem src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64e65403e4305640a54b7c13_react.png" />
                <ToolsItem src="https://angular.io/assets/images/logos/angular/angular.png" />
            </ul>

        </div>
    )
}