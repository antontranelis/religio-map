import { UtopiaMap, Tags, Layer, ItemForm, ItemView, PopupTextAreaInput, PopupTextInput, PopupStartEndInput, TextView, StartEndView, Permissions, PopupButton } from 'utopia-ui'
import { itemsApi } from '../api/itemsApi';
import { permissionsApi } from '../api/permissionsApi';
import { Place, Event, Tag } from '../api/directus';
import { useEffect, useState } from 'react';
import {CalendarDaysIcon, MapPinIcon, UserIcon} from '@heroicons/react/20/solid'
// import { refiBcnApi } from '../api/refiBcnApi';

function MapContainer() {


  const [placesApi, setPlacesApi] = useState<itemsApi<Place>>();
  const [eventsApi, setEventsApi] = useState<itemsApi<Event>>();
  const [tagsApi, setTagsApi] = useState<itemsApi<Tag>>();
  const [permissionsApiInstance, setPermissionsApiInstance] = useState<permissionsApi>();
  const [updatesApiInstance, setUpdatesApiInstance] = useState<itemsApi<Place>>();




  useEffect(() => {

    setPlacesApi(new itemsApi<Place>('places',"286872c8-ae60-4c6e-9dd5-752f8d48c5e6"));
    setEventsApi(new itemsApi<Event>('events', "0b80362d-6b5c-4768-93b7-c87af0f1e3f6"));
    setUpdatesApiInstance(new itemsApi('updates',"a2b3bbe8-94a3-4027-9b99-d81fc148efa9", undefined, {"latest":{"_eq": true}}));
    setTagsApi(new itemsApi<Tag>('tags', undefined, "4c9757a9-9736-4fdb-9649-6c739f4f6687"));
    setPermissionsApiInstance(new permissionsApi());

  }, []);

  const icon = CalendarDaysIcon;


  return (


    <UtopiaMap zoom={3} height='calc(100dvh - 64px)' width="100%" center={[40,-2]}>
      <Layer
        name='Rituals'
        menuIcon={icon}
        menuText='add new ritual to the map'
        menuColor='#f9a825'
        markerIcon='calendar-days-solid'
        markerShape='square'
        markerDefaultColor='#818583'
        //     data={events}
        api={eventsApi}>
        <ItemForm>
          <PopupTextInput dataField='name' placeholder='Name'></PopupTextInput>
          <PopupStartEndInput></PopupStartEndInput>
          <PopupTextAreaInput dataField='text' placeholder={'Text ...'} style="tw-h-40"></PopupTextAreaInput>
        </ItemForm>
        <ItemView>
          <StartEndView></StartEndView>
          <TextView></TextView>
        </ItemView>
      </Layer>
      <Layer
        name='Sacred Places'
        menuIcon={MapPinIcon}
        menuText='add new sacred place to the map'
        menuColor='#2E7D32'
        markerIcon='circle-solid'
        markerShape='circle'
        markerDefaultColor='#818583'
        // data={places}
        api={placesApi} />
      <Layer
        name='Healers'
        menuIcon={UserIcon}
        menuText='place your profile on the map'
        menuColor='#C62828'
        markerIcon='user'
        markerShape='square'
        markerDefaultColor='#818583'
        itemNameField='user_created.first_name'
        itemTextField='user_created.description'
        itemAvatarField='user_created.avatar'
        itemColorField='user_created.color'
        itemOwnerField="user_created"
        itemOffersField='user_created.offers'
        itemNeedsField='user_created.needs'
        customEditLink='/profile-settings'
        onlyOnePerOwner={true}
        // data={places}
        api={updatesApiInstance}>
        <ItemView>
          <PopupButton url={'/profile'} parameterField={'id'} text={'Profile'} colorField={'user_created.color'} />
          <TextView truncate></TextView>
        </ItemView>
        <ItemForm title='Place yor Profile'>
          <div className='flex justify-center'>
          <p>Press Save to place your Profile to the Map</p>
          </div>
        </ItemForm>
      </Layer>
      {/**       <Layer name='ReFi-BCN' menuIcon={MapPinIcon} menuText='add new place' menuColor='#2E7D32' markerIcon='circle-solid' markerShape='circle' markerDefaultColor='#818583' itemTextField='description' itemLatitudeField='geolocation.lat' itemLongitudeField='geolocation.lon' api={refiApi}> </Layer>
 */}
      <Tags api={tagsApi}></Tags>
      <Permissions api={permissionsApiInstance} adminRole='8ed0b24e-3320-48cd-8444-bc152304e580'></Permissions>
    </UtopiaMap>
  )
}

export default MapContainer
