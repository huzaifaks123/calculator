import styles from "../styles/Buttons.module.css"

export default function SideFuncButton() {
    return (

        <div>
            <div className={styles.SideFuncButton}>
                <div style={{ alignSelf: 'stretch', flex: '1 1 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 19.96, display: 'inline-flex' }}>
                    <div style={{ padding: 23, background: '#810CA8', boxShadow: '0px 2px 2px black', borderRadius: 20, border: '1px rgba(229, 184, 244, 0.50) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                        <div style={{ width: 17, height: 17, transform: 'rotate(-45deg)', transformOrigin: '0 0', border: '1.50px white solid' }}></div>
                    </div>
                    <div style={{ paddingLeft: 26.50, paddingRight: 26.50, paddingTop: 21, paddingBottom: 21, background: '#810CA8', boxShadow: '0px 2px 2px black', borderRadius: 20, border: '1px rgba(229, 184, 244, 0.50) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                        <div style={{ width: 17, height: 28, textAlign: 'center', color: '#F5F5F5', fontSize: 30, fontFamily: 'Corben', fontWeight: '400', wordWrap: 'break-word' }}>/</div>
                    </div>
                    <div style={{ paddingLeft: 26.50, paddingRight: 26.50, paddingTop: 35, paddingBottom: 35, background: '#810CA8', boxShadow: '0px 2px 2px black', borderRadius: 20, border: '1px rgba(229, 184, 244, 0.50) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                        <div style={{ width: 17, height: 0, border: '1.50px white solid' }}></div>
                    </div>
                    <div style={{ padding: 26.50, background: '#810CA8', boxShadow: '0px 2px 2px black', borderRadius: 20, border: '1px rgba(229, 184, 244, 0.50) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                        <div style={{ width: 17, height: 17, border: '1.50px white solid' }}></div>
                    </div>
                </div>
            </div>
            <div style={{ paddingLeft: 30.50, paddingRight: 30.50, paddingTop: 12, paddingBottom: 12, left: 292, top: 646, position: 'absolute', background: '#810CA8', boxShadow: '0px 2px 2px black', borderRadius: 20, border: '1px rgba(229, 184, 244, 0.50) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                <div style={{ textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Corben', fontWeight: '400', wordWrap: 'break-word' }}>=</div>
            </div>
        </div>
    )
}