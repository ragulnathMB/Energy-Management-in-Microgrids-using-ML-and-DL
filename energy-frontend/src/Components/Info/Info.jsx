import { useFactor } from '../FactorContext/Factor';
import styles from './Info.module.css';

const InfoPanel = ({ close }) => {
    return (
        <div className={styles.mainBody}>
            <div className={styles.header}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path d="M42-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H42Zm80-80h480v-32q0-11-5.5-20T582-266q-36-18-92.5-36T362-320q-71 0-127.5 18T142-266q-9 5-14.5 14t-5.5 20v32Zm240-240q-66 0-113-47t-47-113h-10q-9 0-14.5-5.5T172-620q0-9 5.5-14.5T192-640h10q0-45 22-81t58-57v38q0 9 5.5 14.5T302-720q9 0 14.5-5.5T322-740v-54q9-3 19-4.5t21-1.5q11 0 21 1.5t19 4.5v54q0 9 5.5 14.5T422-720q9 0 14.5-5.5T442-740v-38q36 21 58 57t22 81h10q9 0 14.5 5.5T552-620q0 9-5.5 14.5T532-600h-10q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T442-600H282q0 33 23.5 56.5T362-520Z"/>
                    </svg>
                </div>
                <div><p>Energy Management in Microgrids using ML/DL</p></div>
            </div>
            <div className={styles.subBody}>
                <p><strong>Developed by:</strong> Ragulnath M B & Radjkrishna S D</p>
                <p>This system leverages Microgrids with Machine Learning (ML) and Deep Learning (DL) for efficient energy management. The key features include:</p>
                <ul>
                    <li>Real-time statistics on energy demand and generation.</li>
                    <li>Forecasting energy demand using advanced ML/DL models.</li>
                    <li>Cost analysis for optimizing energy usage.</li>
                    <li>Control panel for managing environmental factors such as temperature and cloud cover.</li>
                </ul>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.submitBtn} onClick={() => close('none')}>Close</button>
            </div>
        </div>
    );
}

export default InfoPanel;
