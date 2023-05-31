// @ts-ignore
import React from 'react'
import {Box, Label, DropZone, DropZoneItem} from '@adminjs/design-system'
import {BasePropertyProps} from 'adminjs'

const ComponentContent: React.FC<BasePropertyProps> = (props) => {
    const {property, onChange, record} = props

    const handleDropZoneChange = (files) => {
        onChange(property.name, files[0])
    }

    const uploadedPhoto = record.params.material
    const photoToUpload = record.params[property.name]

    return (
        <Box py = "xl">
            <Label>{property.name}</Label>
            <DropZone onChange = {handleDropZoneChange}/>
            {uploadedPhoto && !photoToUpload && (
                <DropZoneItem src = {uploadedPhoto}/>
            )}
        </Box>
    )
}

export default ComponentContent
