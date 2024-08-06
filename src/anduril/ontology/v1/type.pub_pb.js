// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/ontology/v1/type.pub.proto (package anduril.ontology.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { proto3 } = require("@bufbuild/protobuf");

/**
 * @generated from enum anduril.ontology.v1.Class
 */
const Class = proto3.makeEnum(
  "anduril.ontology.v1.Class",
  [
    {no: 0, name: "CLASS_UNKNOWN", localName: "UNKNOWN"},
    {no: 1, name: "CLASS_PERSON", localName: "PERSON"},
    {no: 2, name: "CLASS_CAR", localName: "CAR"},
    {no: 3, name: "CLASS_ANIMAL", localName: "ANIMAL"},
    {no: 4, name: "CLASS_AIR_VEHICLE", localName: "AIR_VEHICLE"},
    {no: 5, name: "CLASS_BICYCLE", localName: "BICYCLE"},
    {no: 6, name: "CLASS_WATER_VEHICLE", localName: "WATER_VEHICLE"},
    {no: 7, name: "CLASS_UNKNOWN_VEHICLE", localName: "UNKNOWN_VEHICLE"},
    {no: 8, name: "CLASS_MISSILE", localName: "MISSILE"},
    {no: 9, name: "CLASS_UNKNOWN_AIR_VEHICLE", localName: "UNKNOWN_AIR_VEHICLE"},
    {no: 10, name: "CLASS_BIRD", localName: "BIRD"},
    {no: 11, name: "CLASS_BACKGROUND", localName: "BACKGROUND"},
  ],
);

/**
 * Refers to the relationship of the tracker to the operational object being represented.
 * Maps 1 to 1 with mil-std affiliation. Pending is a default, yet to be classified object.
 * Ranking from most friendly to most hostile:
 * FRIENDLY
 * ASSUMED FRIENDLY
 * NEUTRAL
 * PENDING
 * UNKNOWN
 * SUSPICIOUS
 * HOSTILE
 *
 * @generated from enum anduril.ontology.v1.Disposition
 */
const Disposition = proto3.makeEnum(
  "anduril.ontology.v1.Disposition",
  [
    {no: 0, name: "DISPOSITION_UNKNOWN", localName: "UNKNOWN"},
    {no: 1, name: "DISPOSITION_FRIENDLY", localName: "FRIENDLY"},
    {no: 2, name: "DISPOSITION_HOSTILE", localName: "HOSTILE"},
    {no: 3, name: "DISPOSITION_SUSPICIOUS", localName: "SUSPICIOUS"},
    {no: 4, name: "DISPOSITION_ASSUMED_FRIENDLY", localName: "ASSUMED_FRIENDLY"},
    {no: 5, name: "DISPOSITION_NEUTRAL", localName: "NEUTRAL"},
    {no: 6, name: "DISPOSITION_PENDING", localName: "PENDING"},
  ],
);

/**
 * Describes the operating environment of an object. For more information refer to MIl-STD 2525d or MIL-STD 6016f.
 * Surface is used to describe objects on-top the water such as boats, while Sub-Surface is used to describe under the
 * water.
 *
 * @generated from enum anduril.ontology.v1.Environment
 */
const Environment = proto3.makeEnum(
  "anduril.ontology.v1.Environment",
  [
    {no: 0, name: "ENVIRONMENT_UNKNOWN", localName: "UNKNOWN"},
    {no: 1, name: "ENVIRONMENT_AIR", localName: "AIR"},
    {no: 2, name: "ENVIRONMENT_SURFACE", localName: "SURFACE"},
    {no: 3, name: "ENVIRONMENT_SUB_SURFACE", localName: "SUB_SURFACE"},
    {no: 4, name: "ENVIRONMENT_LAND", localName: "LAND"},
    {no: 5, name: "ENVIRONMENT_SPACE", localName: "SPACE"},
  ],
);

/**
 * Describes Nationality or Alliance information.
 *
 * @generated from enum anduril.ontology.v1.Nationality
 */
const Nationality = proto3.makeEnum(
  "anduril.ontology.v1.Nationality",
  [
    {no: 0, name: "NATIONALITY_INVALID", localName: "INVALID"},
    {no: 1, name: "NATIONALITY_ALBANIA", localName: "ALBANIA"},
    {no: 62, name: "NATIONALITY_ALGERIA", localName: "ALGERIA"},
    {no: 79, name: "NATIONALITY_ARGENTINA", localName: "ARGENTINA"},
    {no: 2, name: "NATIONALITY_ARMENIA", localName: "ARMENIA"},
    {no: 3, name: "NATIONALITY_AUSTRALIA", localName: "AUSTRALIA"},
    {no: 4, name: "NATIONALITY_AUSTRIA", localName: "AUSTRIA"},
    {no: 5, name: "NATIONALITY_AZERBAIJAN", localName: "AZERBAIJAN"},
    {no: 6, name: "NATIONALITY_BELARUS", localName: "BELARUS"},
    {no: 7, name: "NATIONALITY_BELGIUM", localName: "BELGIUM"},
    {no: 106, name: "NATIONALITY_BOLIVIA", localName: "BOLIVIA"},
    {no: 8, name: "NATIONALITY_BOSNIA_AND_HERZEGOVINA", localName: "BOSNIA_AND_HERZEGOVINA"},
    {no: 80, name: "NATIONALITY_BRAZIL", localName: "BRAZIL"},
    {no: 9, name: "NATIONALITY_BULGARIA", localName: "BULGARIA"},
    {no: 68, name: "NATIONALITY_CAMBODIA", localName: "CAMBODIA"},
    {no: 10, name: "NATIONALITY_CANADA", localName: "CANADA"},
    {no: 81, name: "NATIONALITY_CHILE", localName: "CHILE"},
    {no: 72, name: "NATIONALITY_CHINA", localName: "CHINA"},
    {no: 82, name: "NATIONALITY_COLOMBIA", localName: "COLOMBIA"},
    {no: 11, name: "NATIONALITY_CROATIA", localName: "CROATIA"},
    {no: 87, name: "NATIONALITY_CUBA", localName: "CUBA"},
    {no: 53, name: "NATIONALITY_CYPRUS", localName: "CYPRUS"},
    {no: 12, name: "NATIONALITY_CZECH_REPUBLIC", localName: "CZECH_REPUBLIC"},
    {no: 74, name: "NATIONALITY_DEMOCRATIC_PEOPLES_REPUBLIC_OF_KOREA", localName: "DEMOCRATIC_PEOPLES_REPUBLIC_OF_KOREA"},
    {no: 13, name: "NATIONALITY_DENMARK", localName: "DENMARK"},
    {no: 88, name: "NATIONALITY_DOMINICAN_REPUBLIC", localName: "DOMINICAN_REPUBLIC"},
    {no: 107, name: "NATIONALITY_ECUADOR", localName: "ECUADOR"},
    {no: 54, name: "NATIONALITY_EGYPT", localName: "EGYPT"},
    {no: 14, name: "NATIONALITY_ESTONIA", localName: "ESTONIA"},
    {no: 63, name: "NATIONALITY_ETHIOPIA", localName: "ETHIOPIA"},
    {no: 15, name: "NATIONALITY_FINLAND", localName: "FINLAND"},
    {no: 16, name: "NATIONALITY_FRANCE", localName: "FRANCE"},
    {no: 17, name: "NATIONALITY_GEORGIA", localName: "GEORGIA"},
    {no: 18, name: "NATIONALITY_GERMANY", localName: "GERMANY"},
    {no: 19, name: "NATIONALITY_GREECE", localName: "GREECE"},
    {no: 108, name: "NATIONALITY_GUATEMALA", localName: "GUATEMALA"},
    {no: 92, name: "NATIONALITY_GUINEA", localName: "GUINEA"},
    {no: 20, name: "NATIONALITY_HUNGARY", localName: "HUNGARY"},
    {no: 21, name: "NATIONALITY_ICELAND", localName: "ICELAND"},
    {no: 66, name: "NATIONALITY_INDIA", localName: "INDIA"},
    {no: 103, name: "NATIONALITY_INDONESIA", localName: "INDONESIA"},
    {no: 113, name: "NATIONALITY_INTERNATIONAL_RED_CROSS", localName: "INTERNATIONAL_RED_CROSS"},
    {no: 56, name: "NATIONALITY_IRAQ", localName: "IRAQ"},
    {no: 22, name: "NATIONALITY_IRELAND", localName: "IRELAND"},
    {no: 55, name: "NATIONALITY_ISLAMIC_REPUBLIC_OF_IRAN", localName: "ISLAMIC_REPUBLIC_OF_IRAN"},
    {no: 57, name: "NATIONALITY_ISRAEL", localName: "ISRAEL"},
    {no: 23, name: "NATIONALITY_ITALY", localName: "ITALY"},
    {no: 112, name: "NATIONALITY_JAMAICA", localName: "JAMAICA"},
    {no: 76, name: "NATIONALITY_JAPAN", localName: "JAPAN"},
    {no: 58, name: "NATIONALITY_JORDAN", localName: "JORDAN"},
    {no: 24, name: "NATIONALITY_KAZAKHSTAN", localName: "KAZAKHSTAN"},
    {no: 90, name: "NATIONALITY_KUWAIT", localName: "KUWAIT"},
    {no: 25, name: "NATIONALITY_KYRGHYZ_REPUBLIC", localName: "KYRGHYZ_REPUBLIC"},
    {no: 69, name: "NATIONALITY_LAO_PEOPLES_DEMOCRATIC_REPUBLIC", localName: "LAO_PEOPLES_DEMOCRATIC_REPUBLIC"},
    {no: 26, name: "NATIONALITY_LATVIA", localName: "LATVIA"},
    {no: 59, name: "NATIONALITY_LEBANON", localName: "LEBANON"},
    {no: 64, name: "NATIONALITY_LIBERIA", localName: "LIBERIA"},
    {no: 27, name: "NATIONALITY_LITHUANIA", localName: "LITHUANIA"},
    {no: 28, name: "NATIONALITY_LUXEMBOURG", localName: "LUXEMBOURG"},
    {no: 93, name: "NATIONALITY_MADAGASCAR", localName: "MADAGASCAR"},
    {no: 104, name: "NATIONALITY_MALAYSIA", localName: "MALAYSIA"},
    {no: 29, name: "NATIONALITY_MALTA", localName: "MALTA"},
    {no: 83, name: "NATIONALITY_MEXICO", localName: "MEXICO"},
    {no: 30, name: "NATIONALITY_MOLDOVA", localName: "MOLDOVA"},
    {no: 31, name: "NATIONALITY_MONTENEGRO", localName: "MONTENEGRO"},
    {no: 94, name: "NATIONALITY_MOROCCO", localName: "MOROCCO"},
    {no: 102, name: "NATIONALITY_MYANMAR", localName: "MYANMAR"},
    {no: 32, name: "NATIONALITY_NATO", localName: "NATO"},
    {no: 33, name: "NATIONALITY_NETHERLANDS", localName: "NETHERLANDS"},
    {no: 78, name: "NATIONALITY_NEW_ZEALAND", localName: "NEW_ZEALAND"},
    {no: 109, name: "NATIONALITY_NICARAGUA", localName: "NICARAGUA"},
    {no: 95, name: "NATIONALITY_NIGERIA", localName: "NIGERIA"},
    {no: 34, name: "NATIONALITY_NORWAY", localName: "NORWAY"},
    {no: 67, name: "NATIONALITY_PAKISTAN", localName: "PAKISTAN"},
    {no: 84, name: "NATIONALITY_PANAMA", localName: "PANAMA"},
    {no: 110, name: "NATIONALITY_PARAGUAY", localName: "PARAGUAY"},
    {no: 85, name: "NATIONALITY_PERU", localName: "PERU"},
    {no: 77, name: "NATIONALITY_PHILIPPINES", localName: "PHILIPPINES"},
    {no: 35, name: "NATIONALITY_POLAND", localName: "POLAND"},
    {no: 36, name: "NATIONALITY_PORTUGAL", localName: "PORTUGAL"},
    {no: 75, name: "NATIONALITY_REPUBLIC_OF_KOREA", localName: "REPUBLIC_OF_KOREA"},
    {no: 37, name: "NATIONALITY_ROMANIA", localName: "ROMANIA"},
    {no: 38, name: "NATIONALITY_RUSSIA", localName: "RUSSIA"},
    {no: 60, name: "NATIONALITY_SAUDI_ARABIA", localName: "SAUDI_ARABIA"},
    {no: 96, name: "NATIONALITY_SENEGAL", localName: "SENEGAL"},
    {no: 39, name: "NATIONALITY_SERBIA", localName: "SERBIA"},
    {no: 105, name: "NATIONALITY_SINGAPORE", localName: "SINGAPORE"},
    {no: 40, name: "NATIONALITY_SLOVAKIA", localName: "SLOVAKIA"},
    {no: 41, name: "NATIONALITY_SLOVENIA", localName: "SLOVENIA"},
    {no: 65, name: "NATIONALITY_SOUTH_AFRICA", localName: "SOUTH_AFRICA"},
    {no: 42, name: "NATIONALITY_SPAIN", localName: "SPAIN"},
    {no: 98, name: "NATIONALITY_SUDAN", localName: "SUDAN"},
    {no: 43, name: "NATIONALITY_SWEDEN", localName: "SWEDEN"},
    {no: 44, name: "NATIONALITY_SWITZERLAND", localName: "SWITZERLAND"},
    {no: 61, name: "NATIONALITY_SYRIAN_ARAB_REPUBLIC", localName: "SYRIAN_ARAB_REPUBLIC"},
    {no: 73, name: "NATIONALITY_TAIWAN_PROVINCE_OF_CHINA", localName: "TAIWAN_PROVINCE_OF_CHINA"},
    {no: 45, name: "NATIONALITY_TAJIKISTAN", localName: "TAJIKISTAN"},
    {no: 70, name: "NATIONALITY_THAILAND", localName: "THAILAND"},
    {no: 46, name: "NATIONALITY_THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA", localName: "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"},
    {no: 100, name: "NATIONALITY_TUNISIA", localName: "TUNISIA"},
    {no: 47, name: "NATIONALITY_TURKEY", localName: "TURKEY"},
    {no: 48, name: "NATIONALITY_TURKMENISTAN", localName: "TURKMENISTAN"},
    {no: 101, name: "NATIONALITY_UGANDA", localName: "UGANDA"},
    {no: 49, name: "NATIONALITY_UKRAINE", localName: "UKRAINE"},
    {no: 50, name: "NATIONALITY_UNITED_KINGDOM", localName: "UNITED_KINGDOM"},
    {no: 89, name: "NATIONALITY_UNITED_NATIONS", localName: "UNITED_NATIONS"},
    {no: 99, name: "NATIONALITY_UNITED_REPUBLIC_OF_TANZANIA", localName: "UNITED_REPUBLIC_OF_TANZANIA"},
    {no: 51, name: "NATIONALITY_UNITED_STATES_OF_AMERICA", localName: "UNITED_STATES_OF_AMERICA"},
    {no: 111, name: "NATIONALITY_URUGUAY", localName: "URUGUAY"},
    {no: 52, name: "NATIONALITY_UZBEKISTAN", localName: "UZBEKISTAN"},
    {no: 86, name: "NATIONALITY_VENEZUELA", localName: "VENEZUELA"},
    {no: 71, name: "NATIONALITY_VIETNAM", localName: "VIETNAM"},
    {no: 91, name: "NATIONALITY_YEMEN", localName: "YEMEN"},
    {no: 97, name: "NATIONALITY_ZIMBABWE", localName: "ZIMBABWE"},
  ],
);

/**
 * An ObjectType describes the type of object within the ontology and its disposition.
 *
 * @generated from message anduril.ontology.v1.ObjectType
 */
const ObjectType = proto3.makeMessageType(
  "anduril.ontology.v1.ObjectType",
  () => [
    { no: 1, name: "class", kind: "enum", T: proto3.getEnumType(Class) },
    { no: 2, name: "disposition", kind: "enum", T: proto3.getEnumType(Disposition) },
    { no: 3, name: "environment", kind: "enum", T: proto3.getEnumType(Environment) },
  ],
);


exports.Class = Class;
exports.Disposition = Disposition;
exports.Environment = Environment;
exports.Nationality = Nationality;
exports.ObjectType = ObjectType;