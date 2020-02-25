{-
   OpenAPI Petstore

   This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\

   OpenAPI Version: 3.0.1
   OpenAPI Petstore API version: 1.0.0
   Generated by OpenAPI Generator (https://openapi-generator.tech)
-}

{-|
Module : OpenAPIPetstore.API.Store
-}

{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE MonoLocalBinds #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE OverloadedStrings #-}
{-# OPTIONS_GHC -fno-warn-name-shadowing -fno-warn-unused-binds -fno-warn-unused-imports #-}

module OpenAPIPetstore.API.Store where

import OpenAPIPetstore.Core
import OpenAPIPetstore.MimeTypes
import OpenAPIPetstore.Model as M

import qualified Data.Aeson as A
import qualified Data.ByteString as B
import qualified Data.ByteString.Lazy as BL
import qualified Data.Data as P (Typeable, TypeRep, typeOf, typeRep)
import qualified Data.Foldable as P
import qualified Data.Map as Map
import qualified Data.Maybe as P
import qualified Data.Proxy as P (Proxy(..))
import qualified Data.Set as Set
import qualified Data.String as P
import qualified Data.Text as T
import qualified Data.Text.Encoding as T
import qualified Data.Text.Lazy as TL
import qualified Data.Text.Lazy.Encoding as TL
import qualified Data.Time as TI
import qualified Network.HTTP.Client.MultipartFormData as NH
import qualified Network.HTTP.Media as ME
import qualified Network.HTTP.Types as NH
import qualified Web.FormUrlEncoded as WH
import qualified Web.HttpApiData as WH

import Data.Text (Text)
import GHC.Base ((<|>))

import Prelude ((==),(/=),($), (.),(<$>),(<*>),(>>=),Maybe(..),Bool(..),Char,Double,FilePath,Float,Int,Integer,String,fmap,undefined,mempty,maybe,pure,Monad,Applicative,Functor)
import qualified Prelude as P

-- * Operations


-- *** deleteOrder

-- | @@
-- 
-- Delete purchase order by ID
-- 
-- For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
-- 
deleteOrder 
  :: Accept accept -- ^ request accept ('MimeType')
  -> Text -- ^ "orderId" -  ID of the order that needs to be deleted
  -> OpenAPIPetstoreRequest  contentType  accept
deleteOrder _  _ ( orderId) =
  _mkRequest "DELETE" ["/store/order/",toPath orderId]

data   
instance Produces  MimeNoContent


-- *** getInventory

-- | @@
-- 
-- Returns pet inventories by status
-- 
-- Returns a map of status codes to quantities
-- 
-- AuthMethod: 'AuthApiKeyApiKey'
-- 
getInventory 
  :: Accept accept -- ^ request accept ('MimeType')
  -> OpenAPIPetstoreRequest  contentType  accept
getInventory _  _ =
  _mkRequest "GET" ["/store/inventory"]
    `_hasAuthType` (P.Proxy :: P.Proxy AuthApiKeyApiKey)

data   
-- | @application/json@
instance Produces  MimeJSON


-- *** getOrderById

-- | @@
-- 
-- Find purchase order by ID
-- 
-- For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
-- 
getOrderById 
  :: Accept accept -- ^ request accept ('MimeType')
  -> Integer -- ^ "orderId" -  ID of pet that needs to be fetched
  -> OpenAPIPetstoreRequest  contentType  accept
getOrderById _  _ ( orderId) =
  _mkRequest "GET" ["/store/order/",toPath orderId]

data   
-- | @application/xml@
instance Produces  MimeXML
-- | @application/json@
instance Produces  MimeJSON


-- *** placeOrder

-- | @@
-- 
-- Place an order for a pet
-- 
placeOrder 
  :: Accept accept -- ^ request accept ('MimeType')
  -> Order -- ^ "body" -  order placed for purchasing the pet
  -> OpenAPIPetstoreRequest  contentType  accept
placeOrder _  _ body =
  _mkRequest "POST" ["/store/order"]
    `setBodyParam` body

data  

-- | /Body Param/ "body" - order placed for purchasing the pet
instance HasBodyParam  Order 
-- | @application/xml@
instance Produces  MimeXML
-- | @application/json@
instance Produces  MimeJSON

