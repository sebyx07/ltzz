class Api::V1::BaseController < ApplicationController
  include JSONAPI::ActsAsResourceController
end