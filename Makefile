IMAGE_NAME ?= horns
BUILD_TAG ?= latest

# @TODO push image to ECR repo.
.DEFAULT:
	@echo 'Invalid target.'
	@echo
	@echo '    image         build the Docker image'
	@echo '    deps          install dependancies using Yarn'
	@echo '    publish       publish the project to Github'
	@echo '    local         spin up local Docz environment'
	@echo '    local-down    tear down local environment'
	@echo '    test          run unit tests'
	@echo

default: .DEFAULT

image:
	docker build . -t $(IMAGE_NAME):$(BUILD_TAG)

deps:
	docker-compose run --rm app yarn

publish:
	docker-compose run --rm app bash -c "./increment-version.sh && yarn build && npm publish"

local: local-down image
	NETWORK_NAME="$(NETWORK_NAME)" docker-compose up

local-down:
	NETWORK_NAME="$(NETWORK_NAME)" docker-compose down

test:
	docker-compose run --rm app yarn test
