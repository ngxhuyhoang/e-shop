import { useState } from 'react';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
  MediaType,
  launchImageLibrary,
  launchCamera,
} from 'react-native-image-picker';

const useImagePicker = () => {
  const [pickedMediaResponse, setPickedMediaResponse] = useState<
    ImagePickerResponse | null | any
  >(null);

  const handlePickMedia = (
    mediaType: MediaType,
    multiSelection?: boolean,
    maxWidth?: number,
  ) => {
    const options: ImageLibraryOptions = {
      mediaType,
      includeBase64: true,
      selectionLimit: multiSelection ? 0 : 1, //selectionLimit=0 la multiselect
      maxWidth: maxWidth ?? 1024,
      maxHeight: 4000,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        // Code handle
        return;
      }

      if (response.errorMessage) {
        // Code handle

        return;
      }

      setPickedMediaResponse(response);
    });
  };

  const handleCameraLaunch = async (mediaType: MediaType) => {
    const options = {
      mediaType: mediaType,
      includeBase64: true,
      maxHeight: 4000,
      maxWidth: 1024,
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        return;
      }
      if (response.errorMessage || response.errorCode) {
        return;
      }

      setPickedMediaResponse(response);
    });
  };

  return { handlePickMedia, pickedMediaResponse, handleCameraLaunch };
};

export default useImagePicker;
