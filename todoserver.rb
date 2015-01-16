require 'sinatra'

information = []

get '/' do
  erb(:todo, locals: {information: information}) # no items yet
end

post '/add' do
  list = {first: params[:first],
          last: params[:last],
          email: params[:email],
          }
  information.push(list)
  erb(:todo, locals: {information: information})
end
