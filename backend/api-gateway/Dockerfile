FROM gradle:jdk23 AS build
WORKDIR /app

COPY api-gateway/docker-settings.gradle /app/settings.gradle
COPY api-gateway/build.gradle /app/build.gradle

RUN gradle bootJar --no-daemon --parallel --build-cache -x test || true

COPY api-gateway/src /app/src

RUN gradle bootJar --no-daemon --parallel --build-cache -x test

FROM eclipse-temurin:23-jre
WORKDIR /app

RUN groupadd -r app && useradd -r -g app app

COPY --from=build /app/build/libs/*.jar /app/app.jar

USER app

ENTRYPOINT ["java", "-XX:MaxRAMPercentage=75.0", "-XX:+UseG1GC", "-jar", "/app/app.jar"]
