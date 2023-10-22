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
                <ToolsItem src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64e65403e4305640a54b7c13_react.png" name="ReactJS" />
                <ToolsItem src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" name="NextJS" />
                <ToolsItem src="https://angular.io/assets/images/logos/angular/angular.png" name="AngularJS" />
                <ToolsItem src="https://cdn-icons-png.flaticon.com/512/4492/4492311.png" name="Sql server" />
                <ToolsItem src="https://play-lh.googleusercontent.com/uGqP7F-E_eaEwTb3hMz63MWf0YKRSK6n9INBwibBSOrGDg6B3sd-ACuqNrR312ohdQ" name="C#" />
                <ToolsItem src="https://www.trinitytechnology.in/logo/asp.png" name="Asp.Net" />
                <ToolsItem src="https://codeopinion.com/wp-content/uploads/2017/10/Bitmap-MEDIUM_Entity-Framework-Core-Logo_2colors_Square_Boxed_RGB.png" name="entity framework" />
                <ToolsItem src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" name="Styled components" />
                <ToolsItem src="https://getbootstrap.com.br/docs/4.1/assets/img/bootstrap-stack.png" name="Bootstrap" />
                <ToolsItem src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" name="Git" />
                <ToolsItem src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64e7590f7d60f47d57cc2b7d_html5.png" name="Html 5" />
                <ToolsItem src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64e7590f50f5c7e29ba373cc_css3.png" name="Css" />






            </ul>

        </div>
    )
}