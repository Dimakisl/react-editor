import React, {useContext, useMemo} from 'react';
import { EditorContext } from '../../context/context';
import styles from './Preview.module.css';

const Preview = () => {
    const {html, css, js} = useContext(EditorContext);

    const document = useMemo(() => {
        if(!html && !css && !js) return;
        return `
            <!DOCTYPE html>
            <html lang="ru">
            <base href="/" />
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="stylesheet" type="text/css" href="">
                <style>
                    ${css}
                </style>
                <base href="/" />
            </head>
            <body>
              ${html}

              <script type="text/javascript">
                ${js}
              </script>
            </body>
            </html>
            
        `
    }, [html, css, js]);


    return (
        <div className={styles.content}>
            {
                document ? <iframe title="preview" className={styles.preview} srcDoc={document} />
                :
                <div className={styles.loading}>Ваш код будет отображаться тут</div>
            }
            
        </div>
    )
}

export default Preview;
