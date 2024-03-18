import React, { useRef } from 'react';

interface FileUploadProps {
    setFile: Function;
    accept: string;
    children: React.ReactNode;
}

const FileUpload: React.FC<FileUploadProps> = ({setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.target.files ? setFile(e.target.files[0]) : 0;
    }

    return(
       <div onClick={() => ref.current?.click()}>
            <input
                type='file'
                accept={accept}
                style={{display: 'none'}}
                //@ts-ignore
                ref={ref}
                onChange={onChange}
            />
            {children}
       </div>
   );
};


export default FileUpload;