from flask import Blueprint, request, session
#REPLACE THESE URL PREFIX WITH YOUR CUSTOM URL
blueprint = Blueprint('route', __name__, url_prefix='/')

#REPLACE THESE ROUTES WITH YOUR CUSTOM ROUTES
@blueprint.route('/hello')
def hello():
    return 'Hello, World!'


@blueprint.route('/hello2')
def hello2():
    return 'Hello, World2!'
