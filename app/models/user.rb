class User < ApplicationRecord
  has_many :goals

  def self.from_auth_hash(payload)
    # Create a User for the first time.
    User.find_or_create_by(auth_sub: payload["sub"]) do |user|
      # Saves a user's first and last name
      user.first_name = payload["given_name"]
      user.last_name = payload["family_name"]
      # Saves a user's picture as a URL
      user.picture_url = payload["picture"]
    end
  end
end
